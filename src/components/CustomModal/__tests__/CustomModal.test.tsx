import { ThemeProvider, createTheme } from '@mui/material';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { themeOptions } from 'features/app/constants/lightTheme';
import { useModal } from 'hooks/useModal';
import ModalProvider from '../ModalProvider';
import CustomModal from '../index';

const MockComponent = () => {
  const { toggleModal } = useModal();

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <button
        data-testid="toggleModal"
        onClick={() => toggleModal('md1', { title: 'Test Modal Title', data: {} })}
      >
        Toggle
      </button>
      <CustomModal modal="md1">
        <h1>Test Modal</h1>
      </CustomModal>
    </ThemeProvider>
  );
};

describe('Custom Modal Test', () => {
  const setup = () => {
    render(
      <ModalProvider>
        <MockComponent />
      </ModalProvider>
    );
  };

  beforeEach(() => {
    setup();
  });

  it('Renders without crashing', () => {
    expect(screen).toBeTruthy();
  });

  it('Modal body shows up on toggle', () => {
    // Verify modal body is not initially rendered
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    // Toggle modal
    const toggleBtn = screen.getByTestId('toggleModal');
    fireEvent.click(toggleBtn);
    // Verify modal body is visible after toggling
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test Modal Title')).toBeInTheDocument();
    // Verify modal body disappears after toggling
    fireEvent.click(toggleBtn);
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });
});

import { act, renderHook } from '@testing-library/react-hooks';
import ModalProvider from 'components/CustomModal/ModalProvider';
import { useModal } from '../useModal';

const wrapper = ({ children }: { children: any }) => (
  <ModalProvider>{children}</ModalProvider>
);

describe('useModal', () => {
  it('Changing modal states', () => {
    const { result } = renderHook(useModal, { wrapper });
    expect(result.current.modals.md1).toBe(false);
    // Toggle md1 modal(open modal) and change payload
    const mockTitle = 'Modal 1 title';
    const mockData = { id: 1 };
    act(() => {
      result.current.toggleModal('md1', { title: mockTitle, data: mockData });
    });
    expect(result.current.modals.md1).toBe(true);
    expect(result.current.payload.title).toBe(mockTitle);
    expect(result.current.payload.data).toBe(mockData);
    // Toggle md1 again(close modal)
    act(() => {
      result.current.toggleModal('md1', { title: mockTitle, data: mockData });
    });
    expect(result.current.modals.md1).toBe(false);
  });
});

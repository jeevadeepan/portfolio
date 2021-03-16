import ReactDOM from 'react-dom';
import Timer from './Timer';
import { render, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
})

test('renders without crashing', () => {
    render(<Timer time='pmTime' />);
});


test('starts timer', async () => {
    const { container, getByText, getByRole } = render(<Timer time='pmTime' />);
    expect(getByText('25:00')).toBeInTheDocument();
    const triggerBtn = getByRole('button', { name: /start/i });
    expect(triggerBtn).toBeInTheDocument();
    userEvent.click(triggerBtn);
    expect(getByRole('button', { name: /stop/i })).toBeInTheDocument();
    jest.advanceTimersByTime(2000);
    await waitFor(() => {
        expect(getByText('24:58')).toBeInTheDocument();
    }, {timeout: 3000});
    userEvent.click(getByRole('button', { name: /stop/i }));
});

test('stops timer', async () => {
    const { container, getByText, getByRole } = render(<Timer time='pmTime' />);
    const triggerBtn = getByRole('button', { name: /start/i });
    userEvent.click(triggerBtn);
    jest.runTimersToTime(35000);
    await waitFor(() => {
        expect(getByText('00:00')).toBeInTheDocument();
    }, {timeout: 4000});
    userEvent.click(getByRole('button', { name: /stop/i }));
});

// test('stops at 0');
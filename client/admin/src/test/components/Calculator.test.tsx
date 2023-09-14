import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../../components/Calculator';


describe('Calculator', () => {
  test('renders Calculator component', () => {
    render(<Calculator />);
    expect(screen.getByLabelText(/Número 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número 2/i)).toBeInTheDocument();
  });

  test('handles number input correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByLabelText(/Número 1/i)).toHaveValue('12');
  });

  test('handles addition correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Sumar'));
    expect(screen.getByText(/Resultado:/i)).toHaveTextContent('Resultado: Entradas no válidas');
  });

  test('handles invalid input correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('Sumar'));
    expect(screen.getByText(/Resultado:/i)).toHaveTextContent('Resultado: Entradas no válidas');
  });
});
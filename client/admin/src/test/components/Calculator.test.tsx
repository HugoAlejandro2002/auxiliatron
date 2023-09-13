import { render, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';


test('renders Calculator component', () => {
  render(<Calculator />);
  expect(screen.getByLabelText(/Número 1/i)).toBeTruthy();
  expect(screen.getByLabelText(/Número 2/i)).toBeTruthy();
});
// Más pruebas para restar, multiplicar y dividir

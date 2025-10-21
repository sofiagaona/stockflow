import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // apunta a src/app/page.tsx

it('muestra el texto inicial', () => {
  render(<Home />);
  // Ajusta el texto si tu Home muestra algo distinto
  expect(screen.getByText(/hello|hola|learn/i)).toBeInTheDocument();
});

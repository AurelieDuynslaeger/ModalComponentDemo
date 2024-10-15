import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('should open the first modal with one button when the button is clicked', () => {
    render(<App />);

    //ouvrir la modal avec un bouton
    fireEvent.click(screen.getByText('Modal without Title and 1 Button Action'));

    //vérifier si le texte de la modal s'affiche
    expect(screen.getByText('Do you want to continue?')).toBeInTheDocument();
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('should close the first modal when the button is clicked', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Modal without Title and 1 Button Action'));

    //simuler un clic sur le bouton
    fireEvent.click(screen.getByText('Continue'));

    //vérifier que la modal ne s'affiche plus
    expect(screen.queryByText('Do you want to continue?')).not.toBeInTheDocument();
  });

  it('should open the second modal with a title and two buttons when the button is clicked', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Modal with Title and 2 Button Actions'));

    //vérifier que le titre et le texte de la modal s'affichent
    expect(screen.getByText('Delete Employee')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete this employee?')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('should call primary action on primary button click in second modal (handleClose)', () => {
    //rendre le composant
    render(<App />);

    //ouvrir la modale d'abord
    fireEvent.click(screen.getByText('Modal with Title and 2 Button Actions'));

    //simuler le clic sur le bouton de suppression
    fireEvent.click(screen.getByText('Delete'));

    //vérifier que la modal n'est plus visible
    expect(screen.queryByText('Delete Employee')).not.toBeInTheDocument();
  });
});

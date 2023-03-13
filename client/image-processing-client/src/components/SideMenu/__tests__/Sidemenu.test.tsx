import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import SideMenu from '../SideMenu';
import userEvent from '@testing-library/user-event';

describe('SideMenu', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    );
  });

  test('renders logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders the images link', async () => {
    const imagesText = screen.getByText(/Images/i);
    const links = await screen.findAllByRole('link');
    const imagesLink = links.find((a) => a.getAttribute('href') === '/images');
    expect(imagesText).toBeInTheDocument();
    expect(imagesLink).toBeInTheDocument();
  });

  test('renders the processing link', async () => {
    const processingText = screen.getByText(/Processing/i);
    const links = await screen.findAllByRole('link');
    const processingLink = links.find(
      (a) => a.getAttribute('href') === '/processing'
    );
    expect(processingText).toBeInTheDocument();
    expect(processingLink).toBeInTheDocument();
  });

  test('renders the about link', async () => {
    const aboutText = screen.getByText(/About/i);
    const links = await screen.findAllByRole('link');
    const aboutLink = links.find((a) => a.getAttribute('href') === '/about');
    expect(aboutText).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});

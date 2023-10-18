import React from 'react';
import jest from '@testing-library/jest';
import Page from './Page';

describe('Page component', () => {
  it('should render the folders correctly', () => {
    const data = require('./data/data.json');
    const folders = data.filter((file) => file.type === 'folder');

    const renderedComponent = jest.render(<Page />);

    for (const folder of folders) {
      const folderElement = renderedComponent.getByText(folder.name);
      expect(folderElement).toBeInTheDocument();
    }
  });

  it('should sort the files by date when the sort button is clicked', () => {
    const data = require('./data/data.json');
    const files = data.filter((file) => file.type !== 'folder');

    const renderedComponent = jest.render(<Page />);

    const sortButton = renderedComponent.getByText('Sort');
    sortButton.click();

    const sortedFiles = renderedComponent.getAllByText(/File [0-9]/);

    expect(sortedFiles[0].textContent).toBe('File 1');
    expect(sortedFiles[1].textContent).toBe('File 2');
    expect(sortedFiles[2].textContent).toBe('File 3');
  });
});

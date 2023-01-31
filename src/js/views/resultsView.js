import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recpies found for your query! Please try again🔃`;
  _message = '';
  
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }
    _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}

export default new ResultsView();

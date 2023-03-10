import { useState } from 'react';
import styles from 'components/Searchbar/Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({onSubmit}) => {
 
  const [inputData, setInputData] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setInputData(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputData.trim() === '') {
      toast('Enter a request');
      return;
    }
    onSubmit(inputData);
    setInputData('');
  };

    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.button_label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputData}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }

export default Searchbar;
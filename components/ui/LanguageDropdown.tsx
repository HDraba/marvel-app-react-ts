import Dropdown from 'react-bootstrap/Dropdown';
import styles from './LanguageDropdown.module.css'

type LanguageDropdownProps = {
  dropdownSwitchLanguage: (chosenLang: string) => void;
};

const LanguageDropdown = (props: LanguageDropdownProps) => {
  const german = 'DE';
  const english = 'EN';

  return (
    <Dropdown autoClose={true}>
      <Dropdown.Toggle className={styles.ddButton} variant="success" id="dropdown-basic">
        Language
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.ddMenu}>
       <Dropdown.Item className={styles.ddItem}
          onClick={() => {
              props.dropdownSwitchLanguage(german);
            }}
            >
          German
        </Dropdown.Item>
        <Dropdown.Item className={styles.ddItem}
          onClick={() => {
            props.dropdownSwitchLanguage(english);
          }}
        >
          English
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;

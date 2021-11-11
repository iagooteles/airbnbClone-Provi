import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { MdAccountCircle } from 'react-icons/Md';

import styles from './styles.module.scss';

export function BurguerMenu() {
  return (
    <>
      <div className={styles.burguerMenu}>
        <div className={styles.burguerBackground}>
          <Menu>
            <MenuButton
              className={styles.burguer}
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu size={15} />}
              variant="outline"
            />

            <MenuList className={styles.optionMenu}>
              <MenuItem>
                <div className={styles.optionDiv}>
                  <p className={styles.optionText}>Sign up</p>
                </div>
              </MenuItem >
              <MenuItem >
                <div className={styles.optionDiv}>
                  <p className={styles.optionText}>Login</p>
                </div>
              </MenuItem>
              <MenuItem >
                <div className={styles.optionDiv}>
                  <p className={styles.optionText}>Host your home</p>
                </div>
              </MenuItem>
              <MenuItem >
                <div className={styles.optionDiv}>
                  <p className={styles.optionText}>Entrar com o Github</p>
                </div>
              </MenuItem >
              <MenuItem >
                <div className={styles.optionDiv}>
                  <p className={styles.optionText}>Help</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <MdAccountCircle className={styles.profile} size={30} />
        </div>
      </div >
    </>
  )
}
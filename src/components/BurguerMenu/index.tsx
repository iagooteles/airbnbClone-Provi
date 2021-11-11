import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { MdAccountCircle } from 'react-icons/Md';
import React from 'react';

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

            <MenuList className={styles.option}>
              <MenuItem>
                Sign up
              </MenuItem >
              <MenuItem >
                Login
              </MenuItem>
              <MenuItem >
                Host your home
              </MenuItem>
              <MenuItem >
                Entrar com o Github
              </MenuItem >
              <MenuItem >
                Help
              </MenuItem>
            </MenuList>
          </Menu>
          <MdAccountCircle className={styles.profile} size={30} />

        </div>
      </div>
    </>
  )
}
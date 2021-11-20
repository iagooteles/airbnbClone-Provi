import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Flex } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { MdAccountCircle } from 'react-icons/Md';

import styles from './styles.module.scss';

export function BurguerMenu() {
  return (
    <>
      <Flex
        bg='#ffffff'
        borderRadius='25px'
        padding='1px 5px'
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu size={15} />}
            variant="outline"
            border='none'
            _hover={{
              boxShadow: 'none',
            }}
            _active={{
              boxShadow: 'none',
            }}
            _focus={{
              outline: 'none',
            }}
          />

          <MenuList fontSize='0.9rem'>
            <MenuItem fontWeight='500'>
              <div >
                <p>Sign up</p>
              </div>
            </MenuItem >
            <MenuItem >
              <div>
                <p>Login</p>
              </div>
            </MenuItem>
            <MenuItem >
              <div >
                <p >Host your home</p>
              </div>
            </MenuItem>

            <MenuDivider />

            <MenuItem >
              <div >
                <p >Entrar com o Github</p>
              </div>
            </MenuItem >
            <MenuItem >
              <div>
                <p>Help</p>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>

        <MdAccountCircle className={styles.profile} size={30} />
      </Flex >
    </>
  )
}
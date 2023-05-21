import './globals.scss';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import Nav from './components/navbar/Nav';
import NavItem from './components/navbar/NavItem';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlinePersonPin, MdOutlineAlternateEmail } from 'react-icons/md';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Component library',
  description: 'A component library by Robert Wägar',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.navSpecial}>
          <Nav>
            <NavItem title='Home' url='/' icon={<AiOutlineHome />} />
            <NavItem title='About' url='' icon={<MdOutlinePersonPin />} />
            <NavItem
              title='Contact'
              url=''
              icon={<MdOutlineAlternateEmail />}
            />
          </Nav>
        </div>
        {children}
      </body>
    </html>
  );
}

import { PhoneNumber } from './components/PhoneNumber/PhoneNumber'
import { Location } from './components/Location/Location'
import { Schedule } from './components/Schedule/Schedule'
import { Mail } from './components/Mail/Mail'

import styles from './Contacts.module.scss'

export const Contacts = () => (
  <div className={styles.contacts}>
    <PhoneNumber />
    <span className={styles.separator}/> 
    <Mail />
    <span className={styles.separator}/> 
    <Location />
    <span className={styles.separator}/> 
    <Schedule />
  </div>
)

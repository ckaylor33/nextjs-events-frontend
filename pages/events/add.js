import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

import styles from '@/styles/Form.module.css'

export default function AddEventPage() {
  const [values, setValues] = useState({
    name: '',
    venue: '',
    address: '',
    performers: '',
    description: '',
    date: '',
    time: '',
  })

  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <Layout title='Add new Event'>
      <Link href='/events'>Go Back</Link>
      <h1>Add Event</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Performers</label>
            <input
              type='text'
              id='performers'
              name='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Venue</label>
            <input
              type='text'
              id='venue'
              name='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Time</label>
            <input
              type='text'
              id='time'
              name='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='description'>Event Description</label>
          <textarea
            type='text'
            id='description'
            name='description'
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type='submit' value='Add Event' className='btn' />
      </form>
    </Layout>
  )
}

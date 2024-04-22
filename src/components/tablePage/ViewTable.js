import React, { useEffect, useState } from 'react'
import logoSVG from '../../../src/assets/optimas.svg'
import menuBar from '../../../src/assets/policy_top_navigation.svg'
import userIcon from '../../../src/assets/Group 40394274.svg'
import book from '../../../src/assets/book.svg'
import timer from '../../../src/assets/timer1.svg'
import downArrow from '../../../src/assets/downarrow.svg'
import serachBar from '../../../src/assets/searchbar.svg'
import filter from '../../../src/assets/filter.svg'
import frame from '../../../src/assets/Frame 40393586.svg'
import style from '../loginPage/Login.css'
import tableStyle from './Table.css'
function ViewTable() {
    const [showDescription, setShowDescription] = useState(false);
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
    const tableData = [
        {
          userId: 1,
          userName: 'John Doe',
          email: 'john@example.com',
          phone: '123-456-7890',
          projects: 5,
          designation: 'Developer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        // Add more data as needed
      ];
  return (
    <div className='main-container table-container'>
        <div className='menu-bar'>
            <div className='logo_image'>
                <div className='logo table-logo'>
                    <img src={logoSVG} alt='Logo' />
                </div>
            </div>
            <div className='menu-bar'>
                <div className='table-logo'>
                    <img src={menuBar} alt='Logo' />
                </div>
            </div>
            <div className='user-notification'>
            <div className='table-logo'>
                    <img src={userIcon} alt='Logo' />
                </div>
            </div>
        </div>
        <div className='table-menus'>
            <div>
                <h3 className='table-title'>Admin</h3>
            </div>
            <div className='user-btns flex items-center'>
                <div>
                <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 btn-spacing">Users</button>
                </div>
                <div>
                    <button className='btn-spacing user-group-btn'>User Groups</button>
                </div>
            </div>
        </div>
        <div className='table-menus about-table'>
            <div className='definitions-text flex'>
                <img src={book} alt='book' />
                <span>Definitions - 58</span>
            </div>
            <div className='pending-text flex items-center'>
                <img src={timer} alt='book' />
                <span>Pending</span>
            </div>
        </div>
        <div className='table-menus'>
        <table>
        <thead>
        <tr>
              <th className='table-heading'></th>
              <th className='table-heading'>
                <span>User ID</span>
                <img src={downArrow} alt='Down Arrow' />
                <img src={filter} alt='Filter' />
              </th>
              <th className='table-heading'>
                <span>User Name</span>
                <img src={downArrow} alt='Down Arrow' />
                <img src={filter} alt='Filter' />
              </th>
              <th className='table-heading'>
                <span>Email ID</span>
                <img src={downArrow} alt='Down Arrow' />
                <img src={filter} alt='Filter' />
              </th>
              <th className='table-heading'>
                <span>Phone</span>
                <img src={downArrow} alt='Down Arrow' />
                <img src={filter} alt='Filter' />
              </th>
              <th className='table-heading'>
                <span>Website</span>
                <img src={downArrow} alt='Down Arrow' />
                <img src={filter} alt='Filter' />
              </th>
              <th className='table-heading'>
                <span>Actions</span>
              </th>
            </tr>
        </thead>
        <tbody>
            <tr className='table-data'>
                <td></td>
                <td><img src={serachBar} alt='Filter' /></td>
                <td><img src={serachBar} alt='Filter' /></td>
                <td><img src={serachBar} alt='Filter' /></td>
                <td><img src={serachBar} alt='Filter' /></td>
                <td><img src={serachBar} alt='Filter' /></td>
            </tr>
          {data.map((rowData, index) => (
            <React.Fragment key={index}>
             
              <tr className='table-data' onClick={toggleDescription}>
                <td><img src={downArrow} alt='Filter' /></td>
                <td className='text-left '>{rowData.id}</td>
                <td className='text-left '>{rowData.name}</td>
                <td className='text-left '>{rowData.email}</td>
                <td className='text-left '>{rowData.phone}</td>
                <td className='text-left '>{rowData.website}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              {showDescription && (
                <tr>
                  <td colSpan="7">{rowData.description}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    <div className='footer-container'>
          <div>
            <img src={frame}></img>
          </div>
          <div className='footer-center-menu'>
            <div>
                <img src={frame}></img>
            </div>
            <div>
                <img src={frame}></img>
            </div>
          </div>
          <div>
            <img src={frame}></img>
          </div>
    </div>
    </div>
  )
}

export default ViewTable
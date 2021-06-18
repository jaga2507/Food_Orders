
import './App.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallMadeIcon from '@material-ui/icons/CallMade';
import {Line, Doughnut} from 'react-chartjs-2';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

export default function Home() {


  return (
    <div className="App">
      <div className='flex-app-main'>
        <div className='flex-main'>
          <div>
            <div className='total'>
              Total Applications
            </div>
            <div className='count'>
              7956
            </div>
            <div className='CallMade color'>
              <CallMadeIcon className='CallMadeIcon'/>+3.59%
            </div>
          </div>
          <div>
            <div className='MoreHorizIcon'>
              <MoreHorizIcon/>
            </div>
            <div>
              <div>
                <div>
                  <div className='doughnut'>
                    <Doughnut
                    data={{
                      datasets: [{
                        elements: {
                          center: {
                            text: '90%',
                          }
                        },
                      data: [75, 25],
                      backgroundColor: [
                          '#ae26fd70',
                          'rgba(25, 35, 35, 0.493)',
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                      ],
                      borderWidth: 0,
                    }
                      ]}}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: 'top',
                            },
                          },
                          cutout:120
                        }}
                    />
                    <div className='doughnut-count'>
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border'>
          <div className='flex-main border-flex'>
            <div>
              <div className='total'>
                Total Applications
              </div>
              <div className='count'>
                7956
              </div>
              <div className='CallMade'>
                <CallMadeIcon className='CallMadeIcon'/>+06%
              </div>
            </div>
            <div>
              <div className='MoreHorizIcon'>
                <MoreHorizIcon/>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      <div className='doughnut'>
                        <Doughnut
                        data={{
                          datasets: [{
                            elements: {
                              center: {
                                text: '90%',
                              }
                            },
                          data: [75, 25],
                          backgroundColor: [
                              'white',
                              'rgba(25, 35, 35, 0.493)',
                          ],
                          borderColor: [
                              'rgba(255, 99, 132, 1)',
                          ],
                          borderWidth: 0,
                        }
                          ]}}
                            options={{
                              responsive: true,
                              plugins: {
                                legend: {
                                  position: 'top',
                                },
                              },
                              cutout:120
                            }}
                        />
                        <div className='doughnut-count'>
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-main'>
          <div>
            <div className='total'>
              Total Applications
            </div>
            <div className='count'>
              7956
            </div>
            <div className='CallMade color-red'>
              <CallReceivedIcon className='CallMadeIcon'/>+3.59%
            </div>
          </div>
          <div>
            <div className='MoreHorizIcon'>
              <MoreHorizIcon/>
            </div>
            <div>
              <div>
                <div>
                  <div>
                  <div className='doughnut'>
                    <Doughnut
                    data={{
                      datasets: [{
                        elements: {
                          center: {
                            text: '90%',
                          }
                        },
                      data: [75, 25],
                      backgroundColor: [
                          '#f83754',
                          'rgba(25, 35, 35, 0.493)',
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                      ],
                      borderWidth: 0,
                    }
                      ]}}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: 'top',
                            },
                          },
                          cutout:120
                        }}
                    />
                    <div className='doughnut-count'>
                      75%
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='second-line'>
          <div className='chart-main'>
            <Line
            className='bar'
            data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: 'bharath',
                data: [12, 15, 14, 10, 7, 13],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
                fill: true
              },
              {
                label:'Ezhile',
                data: [17, 7, 2, 11, 3, 10],
                backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                  'rgba(54, 162, 235, 1)',
                ],
                fill: true
              }
            ]
          }}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                beginAtZero: true 
              }
            },
            cubicInterpolationMode: 'monotone',
            tension: 0.4
            
          }}
          />
        </div>
        <div className='application-main'>
          <div className='application-tittle'>
            Total Applications
          </div>
          <div style={{color: 'red'}} className='application'>
            <div style={{backgroundColor:'red'}} className='point'></div>
            <div className='name-of-chart'>
              Applications
            </div>
            <div className='chart-level-main' >
              <div style={{width:'7.5rem',height:'8px',backgroundColor:'red'}}>
              </div>
            </div>
            <div>
              75%
            </div>
          </div>
          <div style={{color:'#ae26fd70'}} className='application'>
            <div style={{backgroundColor:'#ae26fd70'}} className='point'></div>
            <div className='name-of-chart'>
              Applications
            </div>
            <div className='chart-level-main' >
              <div style={{width:'6rem',height:'8px',backgroundColor:'#ae26fd70'}}>
              </div>
            </div>
            <div>
              60%
            </div>
          </div>
          <div style={{color:'rgba(255, 99, 132, 1)'}} className='application'>
            <div style={{backgroundColor:'rgba(255, 99, 132, 1)'}} className='point'></div>
            <div className='name-of-chart'>
              Applications
            </div>
            <div className='chart-level-main' >
              <div style={{width:'2.3rem',height:'8px',backgroundColor:'rgba(255, 99, 132, 1)'}}>
              </div>
            </div>
            <div>
              23%
            </div>
          </div>
          <div style={{color:'rgba(54, 162, 235, 1)'}} className='application'>
            <div style={{backgroundColor:'rgba(54, 162, 235, 1)'}} className='point'></div>
            <div className='name-of-chart'>
              Applications
            </div>
            <div className='chart-level-main' >
              <div style={{width:'3.5rem',height:'8px',backgroundColor:'rgba(54, 162, 235, 1)'}}>
              </div>
            </div>
            <div>
              35%
            </div>
          </div>
          <div style={{color:'yellow'}} className='application'>
            <div style={{backgroundColor:'yellow'}} className='point'></div>
            <div className='name-of-chart'>
              Applications
            </div>
            <div className='chart-level-main' >
              <div style={{width:'9rem',height:'8px',backgroundColor:'yellow'}}>
              </div>
            </div>
            <div>
              90%
            </div>
          </div>
          <div style={{color:'green'}} className='application'>
            <div style={{backgroundColor:'green'}} className='point'></div>
            <div className='name-of-chart'>
              Applications
            </div>
            <div className='chart-level-main' >
              <div style={{width:'8rem',height:'8px',backgroundColor:'green'}}>
              </div>
            </div>
            <div>
              80%
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='third-main'>
          <div className='pre-main'>
            <div className='compoign-main'>
              <div>
                Referals and Compoign status
              </div>
              <div className='sent-main'>
                <div className='sent'>
                  <NearMeOutlinedIcon/>
                </div>
                <div>
                  <div className='sent'>
                    40 Compoigns sent in total
                  </div>
                  <div>
                    4 Comoigns sent in last month
                  </div>
                </div>
              </div>
            </div>
            <div className='second-compoign-main' >
              <div className='referals'>
                <div>
                  Referals
                </div>
                <div className='CallMad-blue'>
                  <CallMadeIcon className='CallMadeIcon'/>+06%
                </div>
                <div className='count'>
                  7956
                </div>
              </div>
              <div className='referals'>
                <div>
                  Referals
                </div>
                <div className='CallMad-blue'>
                  <CallMadeIcon className='CallMadeIcon'/>+06%
                </div>
                <div className='count'>
                  7956
                </div>
              </div>
              <div className='referals'>
                <div>
                  Referals
                </div>
                <div className='CallMad-blue'>
                  <CallMadeIcon className='CallMadeIcon'/>+06%
                </div>
                <div className='count'>
                  7956
                </div>
              </div>
              <div className='referals'>
                <div>
                  Referals
                </div>
                <div className='CallMad-blue'>
                  <CallMadeIcon className='CallMadeIcon'/>+06%
                </div>
                <div className='count'>
                  7956
                </div>
              </div>
            </div>
            <div className='button-main'>
              <button className='button'>
                Disable elevation
              </button>
              <button className='button-color'>
                Disable elevation
              </button>
            </div>
          </div>
          <div className='application-main'>
            <div  className='position-main'>
              <div>
                Open position by department
              </div>
              <div>
                <MoreHorizIcon/>
              </div>
            </div>
            <div style={{
              marginTop:'1rem',
            }}>
              <Doughnut
              style={{
                width:'220px',
                height:'220px',
                margin:'auto'
              }}
              data={{
                labels: ['45', '35', '25'],
                datasets: [{
                data: [45, 35, 25],
                backgroundColor: [
                    '#ae26fd70',
                    'indianred',
                    'rgba(54, 162, 235, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 0,
              }],
              }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                    },
                    cutout:40
                  }}
              />
            </div>
          </div>
      </div>
    </div>
  );
  
}
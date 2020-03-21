import React from 'react'
import './style.css'
import SVG from './svg'
import { request } from '../../services/request'

class Test extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      inputPlayer: 0,
      player: 0,
      data : {
        "id": 1584409151,
        "match": {
          "numPlayers": 11,
          "name": "Duel",
          "isLong": false,
          "last": 2,
          "limit": 0,
          "downMix": true,
          "p": 4,
          "matches": [
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 1
              },
              "p": [
                1,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 2
              },
              "p": [
                9,
                8
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 3
              },
              "p": [
                5,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 4
              },
              "p": [
                -1,
                4
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 5
              },
              "p": [
                3,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 6
              },
              "p": [
                11,
                6
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 7
              },
              "p": [
                7,
                10
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 8
              },
              "p": [
                -1,
                2
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 1
              },
              "p": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 2
              },
              "p": [
                5,
                4
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 3
              },
              "p": [
                3,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 4
              },
              "p": [
                0,
                2
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 3,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 3,
                "m": 2
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 4,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 1
              },
              "p": [
                0,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 2
              },
              "p": [
                -1,
                -1
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 3
              },
              "p": [
                0,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 4
              },
              "p": [
                -1,
                0
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 2
              },
              "p": [
                0,
                -1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 3
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 4
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 3,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 3,
                "m": 2
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 4,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 4,
                "m": 2
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 5,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 6,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 7,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "state": [],
          "pLower": 5
        },
        "allMatch": {
          "Winner Round 1": [
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 1
              },
              "p": [
                1,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 2
              },
              "p": [
                9,
                8
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 3
              },
              "p": [
                5,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 4
              },
              "p": [
                -1,
                4
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 5
              },
              "p": [
                3,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 6
              },
              "p": [
                11,
                6
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 7
              },
              "p": [
                7,
                10
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 1,
                "m": 8
              },
              "p": [
                -1,
                2
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Winner Round 2": [
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 1
              },
              "p": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 2
              },
              "p": [
                5,
                4
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 3
              },
              "p": [
                3,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 2,
                "m": 4
              },
              "p": [
                0,
                2
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Winner Round 3": [
            {
              "id": {
                "s": 1,
                "r": 3,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 1,
                "r": 3,
                "m": 2
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "final": [
            {
              "id": {
                "s": 1,
                "r": 4,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 1": [
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 1
              },
              "p": [
                0,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 2
              },
              "p": [
                -1,
                -1
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 3
              },
              "p": [
                0,
                -1
              ],
              "m": [
                1,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 1,
                "m": 4
              },
              "p": [
                -1,
                0
              ],
              "m": [
                0,
                1
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 2": [
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 2
              },
              "p": [
                0,
                -1
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 3
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 2,
                "m": 4
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 3": [
            {
              "id": {
                "s": 2,
                "r": 3,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 3,
                "m": 2
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 4": [
            {
              "id": {
                "s": 2,
                "r": 4,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            },
            {
              "id": {
                "s": 2,
                "r": 4,
                "m": 2
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 5": [
            {
              "id": {
                "s": 2,
                "r": 5,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 6": [
            {
              "id": {
                "s": 2,
                "r": 6,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ],
          "Loser Round 7": [
            {
              "id": {
                "s": 2,
                "r": 7,
                "m": 1
              },
              "p": [
                0,
                0
              ],
              "pName": [
                null,
                null
              ]
            }
          ]
        },
        "winnerBracket": {
          "Winner": {
            "Round 1": [
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 1
                },
                "p": [
                  1,
                  -1
                ],
                "m": [
                  1,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 2
                },
                "p": [
                  9,
                  8
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 3
                },
                "p": [
                  5,
                  -1
                ],
                "m": [
                  1,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 4
                },
                "p": [
                  -1,
                  4
                ],
                "m": [
                  0,
                  1
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 5
                },
                "p": [
                  3,
                  -1
                ],
                "m": [
                  1,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 6
                },
                "p": [
                  11,
                  6
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 7
                },
                "p": [
                  7,
                  10
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 1,
                  "m": 8
                },
                "p": [
                  -1,
                  2
                ],
                "m": [
                  0,
                  1
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 2": [
              {
                "id": {
                  "s": 1,
                  "r": 2,
                  "m": 1
                },
                "p": [
                  1,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 2,
                  "m": 2
                },
                "p": [
                  5,
                  4
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 2,
                  "m": 3
                },
                "p": [
                  3,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 2,
                  "m": 4
                },
                "p": [
                  0,
                  2
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 3": [
              {
                "id": {
                  "s": 1,
                  "r": 3,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 1,
                  "r": 3,
                  "m": 2
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "final": [
              {
                "id": {
                  "s": 1,
                  "r": 4,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ]
          },
          "Loser": {
            "Round 1": [
              {
                "id": {
                  "s": 2,
                  "r": 1,
                  "m": 1
                },
                "p": [
                  0,
                  -1
                ],
                "m": [
                  1,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 1,
                  "m": 2
                },
                "p": [
                  -1,
                  -1
                ],
                "m": [
                  0,
                  1
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 1,
                  "m": 3
                },
                "p": [
                  0,
                  -1
                ],
                "m": [
                  1,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 1,
                  "m": 4
                },
                "p": [
                  -1,
                  0
                ],
                "m": [
                  0,
                  1
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 2": [
              {
                "id": {
                  "s": 2,
                  "r": 2,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 2,
                  "m": 2
                },
                "p": [
                  0,
                  -1
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 2,
                  "m": 3
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 2,
                  "m": 4
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 3": [
              {
                "id": {
                  "s": 2,
                  "r": 3,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 3,
                  "m": 2
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 4": [
              {
                "id": {
                  "s": 2,
                  "r": 4,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              },
              {
                "id": {
                  "s": 2,
                  "r": 4,
                  "m": 2
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 5": [
              {
                "id": {
                  "s": 2,
                  "r": 5,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 6": [
              {
                "id": {
                  "s": 2,
                  "r": 6,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ],
            "Round 7": [
              {
                "id": {
                  "s": 2,
                  "r": 7,
                  "m": 1
                },
                "p": [
                  0,
                  0
                ],
                "pName": [
                  null,
                  null
                ]
              }
            ]
          }
        }
      },
      success: false
    }
  }

  async onGenerate () {
    this.setState({
      success: true
    })
    const res = await request({
      method: 'post',  
      fullUrl: true,
      url: 'http://192.168.1.26:3099/tournament/bracket/double',
      auth: false,
      data: {
        player: Number(this.state.inputPlayer),
        isLong: false
      }
    })

    if (res.success) {
      this.setState({
        data: res.data
      })
    }

    this.setState({
      false: true
    })

  }

  render() {
    const { player, data } = this.state
    console.log('Response ', data)
    return (
      <div>
        <div>
          <input name="player" type="number" onChange={(el) => this.setState({ inputPlayer: el.target.value })} />
          <button onClick={() => this.onGenerate()}>GENERATE!</button>
        </div>
        {data && data.length !== 0 && <SVG data={data} /> }
      </div>
    )
  }
}

export default Test

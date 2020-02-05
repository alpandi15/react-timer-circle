import React from 'react'
import Pagination from './Pagination'
import { request } from '../../services/request'

const Paginate = () => {
  const [state, setState] = React.useState({
    listData: [],
    currentData: [],
    currentPage: 0,
    totalPages: 0,
    totalData: 0,
    limitPage: 1
  })

  React.useEffect(() => {
    const fetch = async () => {
      const res = await request({
        method: 'get',
        url: 'my-team/all',
        data: {
          page: 1,
          pageSize: 1
        },
        auth: true
      })

      if (res.success) {
        setState({
          currentPage: res.meta.page,
          currentData: res.data,
          totalPages: res.meta.lastPage,
          totalData: res.meta.total
        })
      }
    }

    fetch()
  }, [])
  
  const onPageChanged = async (data) => {
    const { limitPage } = state
    const { currentPage, totalPages } = data;

    const res = await request({
      method: 'get',
      url: 'my-team/all',
      data: {
        page: currentPage,
        pageSize: limitPage || 1
      },
      auth: true
    })
    
    if (res.success) {
      const currentData = res.data;
      setState({
        currentPage,
        currentData,
        totalPages,
        totalData: res.meta.total
      })
    }
  }

  return (
    <div>
      {state && state.currentData ? state.currentData.map((value, key) => {
        return (
        <div key={key} style={{
          margin: '10px',
          background: '#d8d8d8',
          padding: '10px'
        }}>
          <div>{value.name}</div>
        </div>
        )
      })
      : null}
      <div>
        { state && state.totalPages !== 0 ? 
          (
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination
                totalRecords={state && state.totalPages}
                pageLimit={state.limitPage || 1}
                pageNeighbours={2}
                onPageChanged={onPageChanged}
                startPage={1}
              />
            </div>
          )
          : null}
      </div>
    </div>
  )
}

export default Paginate

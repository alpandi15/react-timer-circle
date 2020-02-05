import React from 'react'
import qParams from 'query-string'
import Pagination from './Pagination'
import { request } from '../../services/request'

const Paginate = (props) => {
  const [state, setState] = React.useState({
    currentData: [],
    currentPage: qParams.parse(props.location.search).page || 1,
    totalPages: 0,
    totalData: 0,
    limitPage: 1,
    meta: {
      q: qParams.parse(props.location.search).q || null,
      type: null
    }
  })


  React.useEffect(() => {
    const fetch = async () => {
      const res = await request({
        method: 'get',
        url: 'my-team/all',
        data: {
          ...state.meta,
          page: parseInt(state.currentPage),
          pageSize: 2
        },
        auth: true
      })
  
      if (res.success) {
        setState({
          currentPage: parseInt(res.meta.page),
          currentData: res.data,
          totalPages: res.meta.lastPage,
          totalData: res.meta.total,
          meta: {
            q: state.meta && state.meta.q
          }
        })
      }
    }
    fetch()
  }, [state.currentPage])
  
  const onPageChanged = async (data) => {
    const { currentPage } = data
    const target = `/url_paginate?page=${currentPage}`

    setState({
      ...state,
      currentPage
    })

    props.history.push({
      pathname: target,
    });
  }

  const onChangeSearch = (evt) => {
    setState({
      ...state,
      meta: {
        ...state.meta,
        q: evt.target.value
      }
    })
  }

  const Search = async (data) => {
    setState({
      ...state,
      currentPage: state.currentPage,
      meta: {
        ...data
      }
    })

    const target = `/url_paginate?page=${state.currentPage}&q=${data.q}`
    props.history.push({
      pathname: target,
    });
  }

  const keyDownInput = async (evt) => {
    if (evt.key === 'Enter') {
      Search(state.meta)
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <input type="text" value={state.meta && state.meta.q} onChange={onChangeSearch} onKeyDown={keyDownInput} />
        </div>
      </div>
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
                totalRecords={state.totalPages}
                pageLimit={state.limitPage || 1}
                pageNeighbours={2}
                onPageChanged={onPageChanged}
                startPage={state.currentPage}
              />
            </div>
          )
          : null}
      </div>
    </div>
  )
}

export default Paginate

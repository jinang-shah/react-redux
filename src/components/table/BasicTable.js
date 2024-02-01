import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'
import MOCK_DATA from './MOCK_DATA.json'

export const BasicTable = () => {

    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

  return (
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup)=> (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ) )
            }
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row)=> {
                    
                })
            }
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
  )
}

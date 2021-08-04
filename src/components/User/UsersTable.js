import React, { useState, useEffect, useRef } from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllUsers } from '../../api/usersQuery';
import { withRouter } from 'react-router-dom';
import {
  CircularProgress,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,
} from '@material-ui/core';
import _ from 'lodash';

function UsersTable(props) {
  const [config, setConfig] = useState({
    limit: 3,
    offset: 0,
  });
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllUsers(config);
      if (!mountedRef.current) return;
      setUsers(data);
      setIsLoading(false);
    };
    loadData();
  }, [config]);

  function onRowClickAction(rowData) {
    const id = rowData[0];
    props.history.push('users/' + id);
  }

  function updateConfig(update) {
    setConfig({ ...config, ...update });
  }

  function changePage(e, page) {
    updateConfig({ offset: page * config.limit });
  }

  function changeRowsPerPage(e) {
    const limit = e.target.value;
    const offset = 0;
    updateConfig({ offset, limit });
  }

  function sortByColumn(column, direction) {}

  function removeField(field) {
    var config_aux = { ...config };
    _.unset(config_aux, field);
    setConfig(config_aux);
  }

  function changeFilters(columnChanged, filterList, changedColumnIndex) {
    if (changedColumnIndex == null) {
      setConfig({
        limit: 3,
        offset: 0,
      });
    } else if (filterList[changedColumnIndex].length === 0) {
      removeField(columnChanged);
    } else {
      var update = {};
      update[columnChanged] = filterList[changedColumnIndex][0];
      updateConfig(update);
    }
  }

  return (
    <>
      <MUIDataTable
        title={'All system users'}
        data={users}
        columns={columns}
        options={{
          textLabels: {
            body: {
              noMatch: isLoading ? (
                <CircularProgress />
              ) : config.offset === 0 ? (
                'There are no users registered.'
              ) : (
                'There are no more users to show.'
              ),
            },
          },
          selectableRows: 'none',
          onRowClick: onRowClickAction,
          rowsPerPage: config.limit,
          download: false,
          onColumnSortChange: sortByColumn,
          onFilterChange: (
            columnChanged,
            filterList,
            type,
            changedColumnIndex
          ) => {
            changeFilters(columnChanged, filterList, changedColumnIndex);
          },
          customFooter: () => (
            <TableFooter>
              <TableRow>
                <TableCell>
                  <TablePagination
                    component='div'
                    rowsPerPage={config.limit}
                    page={Math.floor(config.offset / config.limit)}
                    labelRowsPerPage='Rows per page'
                    labelDisplayedRows={() =>
                      `from ${config.offset + 1} to ${
                        config.offset + config.limit + 1
                      }`
                    }
                    backIconButtonProps={{
                      'aria-label': 'Previous page',
                    }}
                    nextIconButtonProps={{
                      'aria-label': 'Next page',
                      disabled: !users.length || users.length < config.limit,
                    }}
                    onPageChange={changePage}
                    onRowsPerPageChange={changeRowsPerPage}
                    rowsPerPageOptions={[1, 3, 5, 10, 15, 50]}
                    count={-1}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          ),
        }}
      />
    </>
  );
}

const columns = [
  {
    name: 'id',
    label: 'id',
    options: {
      filter: false,
    },
  },
  {
    name: 'firstName',
    label: 'First Name',
    options: {
      filter: true,
      customFilterListOptions: {
        render: (v) => `First Name: ${v}`,
      },
      filterType: 'textField',
    },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    options: {
      filter: true,
      customFilterListOptions: {
        render: (v) => `Last Name: ${v}`,
      },
      filterType: 'textField',
    },
  },
  {
    name: 'email',
    label: 'E-mail',
    options: {
      filter: false,
    },
  },
  {
    name: 'banned',
    label: 'Banned',
    options: {
      filter: true,
      customFilterListOptions: {
        render: (v) => `Banned: ${v}`,
      },
      filterOptions: {
        names: ['true', 'false'],
      },

      filterType: 'dropdown',
      customBodyRender: (val) => {
        return val === true ? 'true' : 'false';
      },
    },
  },
];

export default withRouter(UsersTable);

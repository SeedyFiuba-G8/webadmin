import { getAllProjects } from '../../api/projectsQuery';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import MUIDataTable from 'mui-datatables';
import {
  CircularProgress,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,
} from '@material-ui/core';
import _ from 'lodash';

function ProjectsTable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [config, setConfig] = useState({
    limit: 3,
    offset: 0,
  });
  const [projects, setProjects] = useState([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    const loadData = async () => {
      getAllProjects(config).then((data) => {
        if (!mountedRef.current) return;
        setProjects(data);
        setIsLoading(false);
      });
    };
    loadData();
  }, [config]);

  function onRowClickAction(rowData) {
    const id = rowData[0];
    props.history.push('projects/' + id);
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

  function changeFilters(columnChanged, filterList, type, changedColumnIndex) {
    if (type === 'reset') {
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
    <MUIDataTable
      title={'All system projects'}
      data={projects}
      columns={columns}
      options={{
        textLabels: {
          body: {
            noMatch: isLoading ? (
              <CircularProgress />
            ) : config.offset === 0 ? (
              'There are no projects created.'
            ) : (
              'There are no more projects to show.'
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
          changeFilters(columnChanged, filterList, type, changedColumnIndex);
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
                    disabled:
                      !projects.length || projects.length < config.limit,
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
  );
}

const columns = [
  {
    name: 'id',
    label: 'ID',
    options: {
      filter: false,
    },
  },
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: false,
    },
  },
  {
    name: 'type',
    label: 'Type',
    options: {
      filter: true,
      customFilterListOptions: {
        render: (v) => `Type: ${v}`,
      },
      filterType: 'textField',
    },
  },
  {
    name: 'lat',
    label: 'Latitud',
    options: {
      filter: false,
    },
  },
  {
    name: 'long',
    label: 'Longitud',
    options: {
      filter: false,
    },
  },
  {
    name: 'status',
    label: 'Status',
    options: {
      filter: true,
      customFilterListOptions: {
        render: (v) => `Status: ${v}`,
      },
      filterOptions: {
        names: ['DRAFT', 'FUNDING', 'IN_PROGRESS', 'COMPLETED'],
      },

      filterType: 'dropdown',
    },
  },
  {
    name: 'blocked',
    label: 'Blocked',
    options: {
      filter: true,
      customFilterListOptions: {
        render: (v) => `Blocked: ${v}`,
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

export default withRouter(ProjectsTable);

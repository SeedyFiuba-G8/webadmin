import { getAllProjects } from '../../api/projectsQuery';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import MUIDataTable from 'mui-datatables';
import { CircularProgress } from '@material-ui/core';
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
      const data = await getAllProjects(config);
      if (!mountedRef.current) return;
      setProjects(data);
      setIsLoading(false);
    };
    console.log('Reloading with config: ', config);
    loadData();
  }, [config]);

  function onRowClickAction(rowData) {
    const id = rowData[0];
    props.history.push('projects/' + id);
  }

  function updateConfig(update) {
    setConfig({ ...config, ...update });
  }

  function changePage(page) {
    updateConfig({ offset: Math.floor(page / config.limit) });
  }

  function changeRowsPerPage(rows) {
    console.log('changed page number');
    updateConfig({ limit: rows });
  }

  function sortByColumn(column, direction) {
    console.log('Columns sort by:', column, 'direction:', direction);
    // updateConfig({
    //     sortColumn: column,
    //     sortAsc: direction === 'asc' ? true : false,
    // });
  }

  function removeField(field) {
    var config_aux = { ...config };
    _.unset(config_aux, field);
    setConfig(config_aux);
  }

  function changeFilters(columnChanged, filterList, changedColumnIndex) {
    console.log('cambiando config:', filterList);
    if (changedColumnIndex == null) {
      setConfig({
        limit: 3,
        offset: 0,
      });
    } else if (filterList[changedColumnIndex].length === 0) {
      console.log('Removed field:', columnChanged);
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
      columns={projects.length > 0 ? columns : []}
      options={{
        textLabels: {
          body: {
            noMatch: isLoading ? (
              <CircularProgress />
            ) : (
              'There are no projects registered.'
            ),
          },
        },
        selectableRows: 'none',
        onRowClick: onRowClickAction,
        page: config.offset * config.limit,
        rowsPerPage: config.limit,
        jumpToPage: true,
        download: false,
        rowsPerPageOptions: [1, 3, 5, 10, 15, 50],
        onChangePage: changePage,
        onChangeRowsPerPage: changeRowsPerPage,
        onColumnSortChange: sortByColumn,
        onFilterChange: (
          columnChanged,
          filterList,
          type,
          changedColumnIndex
        ) => {
          changeFilters(columnChanged, filterList, changedColumnIndex);
        },
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
    name: 'country',
    label: 'Country',
    options: {
      filter: false,
    },
  },
  {
    name: 'city',
    label: 'City',
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

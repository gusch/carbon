import React from 'react';
import classNames from 'classnames';
import TableRow from './table-row';
import TableCell from './table-cell';
import TableHeader from './table-header';

/**
 * A Table widget.
 *
 * == How to use a Table in a component:
 *
 * In your file:
 *
 *   import { Table, TableRow, TableCell, TableHeader } from 'carbon/lib/components/table';
 *
 * To render a Table:
 *
 *   // map data to table rows
 *   let tableRows = (
 *     this.props.data.map((datum, key) => {
 *       return (
 *         <TableRow>
 *           <TableCell>
 *             { datum.firstName }
 *           </TableCell>
 *
 *           <TableCell>
 *             { datum.lastName }
 *           </TableCell>
 *         </TableRow>
 *       );
 *     });
 *   );
 *
 *   // prepend array of rows with a header row
 *   tableRows.unshift(
 *     <TableRow>
 *       <TableHeader>First Name</TableHeader>
 *       <TableHeader>Last Name</TableHeader>
 *     </TableRow>
 *   );
 *
 *   // render the table with the table rows
 *   <Table>
 *     { tableRows }
 *   </Table>
 *
 * @class Table
 * @constructor
 */
class Table extends React.Component {

  /**
   * Renders the component.
   *
   * @method render
   */
  render() {
    let className = classNames('ui-table', this.props.className);

    return (
      <table className={ className }>
        <tbody>
          { this.props.children }
        </tbody>
      </table>
    );
  }

}

export {
  Table,
  TableRow,
  TableCell,
  TableHeader
};
/// <reference path="crud.d.ts" />

import {rowID, rowElement} from "interface.ts";
import * as CRUD from "crudjs;

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowId : RowId = CRUD.insertRow(row);

const updatedRow : RowElement = CRUD.updateRow(row, 23);

CRUD.updateRow(rowId, row);
CRUD.deleteRow(rowId);

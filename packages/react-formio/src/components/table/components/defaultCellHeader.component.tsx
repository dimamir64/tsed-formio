import React from "react";
import { HeaderGroup } from "react-table";

export interface DefaultCellHeaderProps<Data extends object = any> extends Record<string, unknown> {
  column: HeaderGroup<Data>;
}

export function DefaultCellHeader<Data extends Record<string, unknown> = {}>({ column }: DefaultCellHeaderProps<Data>) {
  return (
    <div className={"table-cell-header"}>
      <div className='table-cell-header__label' {...column.getSortByToggleProps()}>
        <span>{column.render("Header") as any}</span>

        {column.render("ArrowSort") as any}
      </div>
      {column.canFilter ? <div className='table-cell-header__filter'>{column.render("Filter") as any}</div> : null}
    </div>
  );
}

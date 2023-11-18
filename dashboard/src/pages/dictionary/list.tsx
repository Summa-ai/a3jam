import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import {
  BaseRecord,
  IResourceComponentsProps,
  useMany,
  useTranslate,
} from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";

export const DictionaryList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: dictionaryData, isLoading: dictionaryIsLoading } = useMany({
    resource: "dictionary",
    ids: tableProps?.dataSource?.map((item) => item!.id!) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="word" title={"word"} />
        <Table.Column
          dataIndex={["dictionary"]}
          title={"request"}
          render={(_, record: BaseRecord) =>
            dictionaryData &&
            JSON.stringify(
              dictionaryData!.data!.find((item) => item.id === record.id)!
                .dictionary
            )
          }
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

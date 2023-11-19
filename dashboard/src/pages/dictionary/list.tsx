import { DeleteButton, List, useTable } from "@refinedev/antd";
import {
  BaseRecord,
  IResourceComponentsProps,
  useMany,
  useTranslate,
} from "@refinedev/core";
import { Button, Space, Table } from "antd";
import React from "react";
import { SendIcon } from "../../components/app-icon";
const API_URL = import.meta.env.VITE_BACKEND_URL!;
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

  async function sendRequest(record: BaseRecord) {
    const result = await fetch(`${API_URL}/dictionary/entry`, {
      method: "POST",
      body: JSON.stringify({ entry: record.dictionary }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
  }

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="word" title={"word"} />
        <Table.Column
          title={"request"}
          render={(_, record: BaseRecord) => {
            if (!dictionaryIsLoading && dictionaryData && dictionaryData.data) {
              if (
                dictionaryData.data.find((item) => item.id === record.id)
                  ?.dictionary
              ) {
                return JSON.stringify(
                  dictionaryData.data.find((item) => item.id === record.id)
                    ?.dictionary || ""
                );
              }
            } else {
              return "";
            }
          }}
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              {/* <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} /> */}
              <Button
                size="small"
                icon={SendIcon}
                onClick={() => sendRequest(record)}
              />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

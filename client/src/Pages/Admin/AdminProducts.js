import React, { useMemo } from 'react'
import query, {useMutation, useQuery,useQueryClient } from "react-query"
import { FetchProductList,deleteProduct } from "../../Api"
import { Table,Popconfirm} from 'antd';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

function AdminProducts() {

  const queryClient=useQueryClient();

  const{isLoading,isError,data,error}=useQuery("admin:products",FetchProductList)
 
 
  const deleteMutation=useMutation(deleteProduct,{
 
  onSuccess:()=>queryClient.invalidateQueries("admin:products")
 
  },)
 
 
 
 
  const columns = [
    {
      title: 'ÜRÜN BAŞLIĞI',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'FİYAT',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '',
      key: 'action',
      render: (record) => (
        <>
          <Link to={`/admin/products/${record.id}`}>Edit</Link>
  
          <Popconfirm
            title="Are you sure"
            onConfirm={() => {
              deleteMutation.mutate(record.id, {
                onSuccess: () => {
                  console.log('silindi');
                },
              });
            }}
            onCancel={() => console.log('iptal edildi')}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <a href="#" style={{ marginLeft: 15 }}>
              Delete
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];
 
  if (isLoading) {
   
   return <div>
             Loading...
         </div>
  }
 
  
  if (isError) {
   
   return <div>
             {error.message}
         </div>
  }
 
 
   return (
 
 
  <div>
 
    <Flex justifyContent="space-between" alignItems="center" m="15"> <div>
     
    </div><Link to="/admin/products/new"><Button>YENİ ÜRÜN EKLE</Button></Link></Flex>
   <Table  dataSource={data} columns={columns} rowKey="id"/>;
  </div>
 
 
   )
 }

export default AdminProducts
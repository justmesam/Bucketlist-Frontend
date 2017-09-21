import instance from '../constants/axiosConfig';

const GET_BUCKETLIST_ITEMS = "GET_BUCKETLIST_ITEMS";
const GET_ONE_BUCKETLIST_ITEM = "GET_ONE_BUCKETLIST_ITEM";
const POST_BUCKETLIST_ITEMS = "POST_BUCKETLIST_ITEMS";
const EDIT_BUCKETLIST_ITEMS = "EDIT_BUCKETLIST_ITEMS";
const DELETE_BUCKETLIST_ITEMS = "DELETE_BUCKETLIST_ITEMS";

export const getBucketlistsItems = (id) => ({
  type : GET_BUCKETLIST_ITEMS,
  payload : instance.get(`/bucketlists/${id}/items/`)
});

export const getOneBucketlistItem = ( id, itemid ) => ({
  type : GET_ONE_BUCKETLIST_ITEM,
  payload : instance.get(`/bucketlists/${id}/items/${itemid}/`)
});

export const postBucketlistsItems = ( id, { title, intro }) => ({
  type : POST_BUCKETLIST_ITEMS,
  payload : instance.post(`/bucketlists/${id}/items/`, { title, intro })
});

export const editBucketlistsItems = ( id, itemid, { title, intro }) => ({
  type : EDIT_BUCKETLIST_ITEMS,
  payload : instance.put(`/bucketlists/${id}/items/${itemid}/`, { title, intro })
});

export const deleteBucketlistsItems = ( id, itemid ) => ({
  type : DELETE_BUCKETLIST_ITEMS,
  payload : instance.delete(`/bucketlists/${id}/items/${itemid}/`)
});

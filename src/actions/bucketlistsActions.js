import instance from '../constants/axiosConfig';

const GET_BUCKETLIST = "GET_BUCKETLISTS";
const GET_ONE_BUCKETLIST = "GET_ONE_BUCKETLIST";
const POST_BUCKETLIST = "POST_BUCKETLIST";
const EDIT_BUCKETLIST = "EDIT_BUCKETLIST";
const DELETE_BUCKETLIST = "DELETE_BUCKETLIST";

export const getBucketlists = () => ({
  type : GET_BUCKETLIST,
  payload : instance.get('/bucketlists/')
});

export const getOneBucketlist = ( id ) => ({
  type : GET_ONE_BUCKETLIST,
  payload : instance.get(`/bucketlists/${id}/`)
});

export const postBucketlists = ({ title, intro }) => ({
  type : POST_BUCKETLIST,
  payload : instance.post('/bucketlists/', { title , intro })
});

export const editBucketlists = ( id, { title, intro }) => ({
  type : EDIT_BUCKETLIST,
  payload : instance.put(`/bucketlists/${id}/`, { title, intro })
});

export const deleteBucketlists = ( id ) => ({
  type : DELETE_BUCKETLIST,
  payload : instance.delete(`/bucketlists/${id}/`)
});

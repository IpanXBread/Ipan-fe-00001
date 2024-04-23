var axios = require('axios');

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/genre?genre=comedy',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

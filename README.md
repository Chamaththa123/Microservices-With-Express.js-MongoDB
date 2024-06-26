# Microservices-With-Express.js-MongoDB

### This project demonstrates a basic microservice architecture using Node.js, Express, and MongoDB. It includes three main components: User Service, Order Service, and an API Gateway.<br/><br/>
microservice-architecture/<br/>
├── user-service/<br/>
│   ├── server.js<br/>
│   ├── routes/<br/>
│   │   └── userRoutes.js<br/>
│   ├── models/<br/>
│   │   └── userModel.js<br/>
│   └── package.json<br/>
├── order-service/<br/>
│   ├── server.js<br/>
│   ├── routes/<br/>
│   │   └── orderRoutes.js<br/>
│   ├── models/<br/>
│   │   └── orderModel.js<br/>
│   └── package.json<br/>
└── gateway/<br/>
    ├── server.js<br/>
    └── package.json<br/>


### Each service will run on the following ports:
<ul>
<li>User Service: http://localhost:3001</li>
<li>Order Service: http://localhost:3002</li>
<li>API Gateway: http://localhost:3000</li>
</ul>


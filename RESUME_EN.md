## Peter Ibragimov 
#### Senior backend Go developer

#### Summary
A backend developer with 4+ years of experience in Go and Python. I specialize in the development of high-load microservices, performance optimization and architecture of distributed systems. I have some experience leading a team, implementing DevOps practices, and working with AWS and Yandex Cloud technologies.

Contacts:
- Telegram: [@teadove](https://t.me/teadove) (preferred)
- Email: [peter.ibragimov@gmail.com](mailto:peter.ibragimov@gmail.com)

## Experience

### MTS (Mobile TeleSystems), Geocenter
Development of utility and product services for MTS related to geo, for example, "KtoGde"([КтоГде](https://media.mts.ru/technologies/205849-mts-kto-gde)).

May 2024 - present (1.5 year)

Senior backend go-python developer
 
#### Responsibilities
- `Go` + `Python` backend development
- Developed and adopted agreements and standards within the team. I onboarded new employees, introduced tasks, distributed tasks.
- Set up project support: configuring grafana, CI-CD, linters, deployment. 
- Designed and developed the geofence service, which is responsible for generating notifications about users entering certain areas, i.e. school, home etc.
- Deployed projects to Yandex Cloud (cloud provider): managed-postgres, managed-redis, managed-kafka, managed-k8s. Optimized cloud costs, which reduced infrastructure costs by 20-30% for some services. 
- Developed and supported the project "KtoGde". 
- Set up nginx, gRPC balancers, and developed a backend using both REST+JSON and gRPC.
- Analyzed and developed algorithms for filtering users' GPS coordinates using locators (WiFi, base stations), heuristics and algorithms (dbscan, geohash, etc.)
- Minor optimizations: rewrote the load balancer from Python to Go, which reduced resource consumption by 2-5 times.

### Whoosh
Kicksharing, whoosh-bike.ru, Moscow.

September 2021 - May 2024 (2.5 years)

Backend python-go developer

#### Responsibilities
- `Go` + `Python` backend development
- Developed a loyalty service backend from scratch, responsible for calculating and issuing loyalty points and other privileges. The service partially asynchronously processed events from kafka + outbox, calculated the user's level, how many points should be given to the user, or how much to charge for a particular service. In the process, `kafka` was brought into the project, contracts were developed and a separate outbox service was developed, which implemented the outbox pattern for consistent interaction between the java monolith and kafka. 
- Actively integrated solutions from AWS: `SQS`, `Kinesis`, `Cognito`, `Lambda`, `DynamoDB`, `API Gateway`, `MKS`.
- Optimized the code in both Python and Go. 
- Profiled and optimized `SQL` queries for `PostgreSQL`. 
- Designed and developed a phased move from a monolithic approach to a microservice approach. 
- Rewrote and optimized the authentication and registration service, as a result of which bugs were fixed, the service speed increased by an average of 2 times, and on some requests - by 10 times. Improved stability and fault tolerance. 
- Independently designed and developed solutions and libraries.
- Developed a high-load service to improve scooter search using data denormalization and a separate DBMS cluster with PostGIS.
- Developed deployment and infrastructure configuration through IaC: `terraform`, `terragrunt`. I introduced the practice of infrastructure deployment through Terraform and GitLab CI to the team.
- I was engaged in SLA tasks: setting up metrics, alerts, building dashboards, telemetry: `grafana`, `AWS CloudWatch Metrics`, `AWS X-Ray`.
- Participated in the development of code style agreements, writing technical documentation, conducting code reviews, training and supporting junior colleagues, organizing the process of introducing new technologies and development techniques, as well as onboarding new employees and conducting interviews.
- Optimized the operation of a high-load endpoint by rewriting the code from Python to Go: RAM consumption decreased by 2 times, CPU - by 9 times, latency - by 10 times.

## Certificates and achievements

### 2023
- [Presentation](https://www.youtube.com/watch?v=cSZrWpyNlfI) at the PyCon RU conference _"How to use serverless and not mess up"_
- [Article](https://habr.com/ru/companies/whoosh/articles/728926/) on habr _"Backend on AWS Lambda in 60 minutes"_

## Education

#### 2025 NUST MISIS, Moscow.
Bachelor's degree in Applied Mathematics, Department of Engineering Cybernetics, Algorithms and Methods of Science-Intensive Software.

## Skills
- Programming languages:
	- `Go 1.25`
	- `Python 3.13`
- Databases & infrastructure:
	- `PostgreSQL`, `PostGIS`
	- `DynamoDB`, `Redis`
	- `Kafka`, `Kinesis`, `SQS`
	- `Terraform`, `Terragrunt`, `Kubectl`, `Helm`
- Containers:
	- `Docker`, `Kubernetes`
- Monitoring & telemetry:
	- `Prometheus`, `Victoria Metrics`, `Jaeger`, `AWS X-Ray`
- Experience with `Git`, `GitLab`, `GitLab CI`, `Confluence`, `Jira`.
- Key technologies: microservices, distributed systems, cloud architecture, API design, serverless.
- Experience with `*nix`-systems, `bash` scripts, managing `Linux` servers.
- Languages: 
	- English: B2 (IELTS 6.0)
	- Russian: native

## Personal qualities
- Leadership skills and mentoring experience
- Communication skills and teamwork
- Analytical thinking and solving complex problems
- Learning ability and adaptation to new technologies

### Links
- [GitHub](https://github.com/TeaDove/)
- [LinkedIn](https://www.linkedin.com/in/peter-ibragimov-7907871b7/)

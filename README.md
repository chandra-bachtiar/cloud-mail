<p align="center">
    <img src="doc/demo/logo.png" width="80px" />
    <h1 align="center">Cloud Mail</h1>
    <p align="center">A minimalist responsive email service based on Cloudflare, supporting email sending, attachment handling 🎉</p> 
    <p align="center">
        <a href="/README.md" style="margin-left: 5px">English</a> | <a href="/README-zh.md">Chinese</a>
    </p>
    <p align="center">
        <a href="https://github.com/maillab/cloud-mail/tree/main?tab=MIT-1-ov-file" target="_blank" >
            <img src="https://img.shields.io/badge/license-MIT-green" />
        </a>    
        <a href="https://github.com/maillab/cloud-mail/releases" target="_blank" >
            <img src="https://img.shields.io/github/v/release/maillab/cloud-mail" alt="releases" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/issues" >
            <img src="https://img.shields.io/github/issues/maillab/cloud-mail" alt="issues" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/stargazers" target="_blank">
            <img src="https://img.shields.io/github/stars/maillab/cloud-mail" alt="stargazers" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/forks" target="_blank" >
            <img src="https://img.shields.io/github/forks/maillab/cloud-mail" alt="forks" />
        </a>
    </p>
    <p align="center">
        <a href="https://trendshift.io/repositories/20459" target="_blank" >
            <img src="https://trendshift.io/api/badge/repositories/20459" alt="trendshift" >
        </a>
    </p>
</p>


## Introduction

With just one domain, you can create multiple email addresses, similar to major email platforms. This project supports deployment to Cloudflare Workers, reducing server costs and allowing you to build your own email service.

## Demo

- [Live Demo](https://skymail.ink)<br>
- [Deployment Docs](https://doc.skymail.ink)<br>

| ![](/doc/demo/demo1.png) | ![](/doc/demo/demo2.png) |
|-----------------------|-----------------------|
| ![](/doc/demo/demo3.png) | ![](/doc/demo/demo4.png) |



## Features

- **💰 Low Cost**: Deployable to Cloudflare Workers, reducing server costs

- **💻 Responsive Design**: Responsive layout automatically adapts to PC and most mobile browsers

- **📧 Email Sending**: Integrated with Resend for sending emails, supports bulk sending, inline images and attachments, send status tracking

- **🛡️ Admin Features**: Manage users and emails, RBAC permission control with feature and resource limits

- **📦 Attachments**: Send and receive attachments using R2 object storage for file storage and download

- **🔔 Email Forwarding**: Forward received emails to Telegram bot or other provider email addresses

- **📡 Open API**: API support for batch user creation and multi-condition email queries

- **🔢 Verification Code Recognition**: Automatically recognize email verification codes using Workers AI

- **📈 Data Visualization**: Visualize system data details and user email growth using ECharts

- **🎨 Personalization**: Customize website title, login background, and transparency

- **🤖 Bot Verification**: Integrated Turnstile human verification to prevent bot mass registration

- **📜 More Features**: Under development...



## Tech Stack

- **Platform**: [Cloudflare Workers](https://developers.cloudflare.com/workers/)

- **Web Framework**: [Hono](https://hono.dev/)

- **ORM**: [Drizzle](https://orm.drizzle.team/)

- **Frontend Framework**: [Vue3](https://vuejs.org/) 

- **UI Framework**: [Element Plus](https://element-plus.org/) 

- **Email Sending**: [Resend](https://resend.com/)

- **Caching**: [Cloudflare KV](https://developers.cloudflare.com/kv/)

- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/)

- **File Storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/)

## Directory Structure

```
cloud-mail
├── mail-worker				    # Worker backend project
│   ├── src                  
│   │   ├── api	 			    # API layer
│   │   ├── const  			    # Project constants
│   │   ├── dao                 # Data access layer
│   │   ├── email			    # Email processing/receiving
│   │   ├── entity			    # Database entities
│   │   ├── error			    # Custom exceptions
│   │   ├── hono			    # Web framework config, interceptors, global error handling
│   │   ├── i18n			    # Internationalization
│   │   ├── init			    # Database & cache initialization
│   │   ├── model			    # Response data models
│   │   ├── security			# Authentication & authorization
│   │   ├── service			    # Business service layer
│   │   ├── template			# Message templates
│   │   ├── utils			    # Utilities
│   │   └── index.js			# Entry point
│   ├── package.json			# Project dependencies
│   └── wrangler.toml			# Project configuration
│
├── mail-vue				    # Vue frontend project
│   ├── src
│   │   ├── axios 			    # Axios configuration
│   │   ├── components			# Custom components
│   │   ├── echarts			    # ECharts component imports
│   │   ├── i18n			    # Internationalization
│   │   ├── init			    # Inbound initialization
│   │   ├── layout			    # Layout components
│   │   ├── perm			    # Permission/auth
│   │   ├── request			    # API interfaces
│   │   ├── router			    # Route configuration
│   │   ├── store			    # Global state management
│   │   ├── utils			    # Utilities
│   │   ├── views			    # Page components
│   │   ├── app.vue			    # Root component
│   │   ├── main.js			    # Entry JS
│   │   └── style.css			# Global CSS
│   ├── package.json			# Project dependencies
└── └── env.release				# Environment config
```

## Sponsor

<a href="https://doc.skymail.ink/support.html" >
<img width="170px" src="./doc/images/support.png" alt="">
</a>

## License

This project is licensed under the [MIT](LICENSE) license.

## Community

[Telegram](https://t.me/cloud_mail_tg)



websomtep
=========

**A fake SMTP server that delivers mail to the browser and provides a simple REST service for testing e-mail.**

This fork contains some further work based on https://github.com/bradfitz/websomtep.

# Installation

    go get github.com/chlu/websomtep

# Running

Start a local server and listen on default ports:

    websomtep

See `websomtep -h` for supported options.

Open [http://localhost:8081/] in your webbrowser and send e-mails via SMTP to `localhost:2500`.

# REST services

A list of recent messages can be accessed via `GET /messages`. This list can be resetted via `POST /reset`. These services are experimental and subject to change.
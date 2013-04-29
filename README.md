websomtep
=========

**A fake SMTP server that delivers mail to the browser and provides a simple REST service for testing e-mail.**

This fork contains some further work based on https://github.com/bradfitz/websomtep.

# Installation

    go get github.com/chlu/websomtep

# Running

Start a local server and listen on default ports:

    cd $GOPATH/src/github.com/chlu/websomtep
    websomtep

See `websomtep -h` for supported options.

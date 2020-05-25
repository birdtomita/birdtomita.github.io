function FindProxyForURL(url, host) {

    if (isPlainHostName(host) ||
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0")) {
        return "SOCKS 192.168.0.31:4242";
}
return "DIRECT"

}

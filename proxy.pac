function FindProxyForURL(url, host) {

    if (
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0")) {
        return "SOCKS 192.168.0.35:4242";
    }
    if (isInNet(host, "192.168.52.0", "255.255.255.0")) {
        return "SOCKS 192.168.0.35:4242";
    }
return "DIRECT"

}

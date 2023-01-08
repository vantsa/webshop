<?php

class RendelesController
{
    public function __construct(private RendelesGateway $gateway)
    {}

    public function processRequest(string $method, string $type, array $body): void
    {

        if($method == "POST" && $type=='rendeles') {
            $this->handleRendeles($body);
        }
    }

    private function handleRendeles(array $items) {
        echo json_encode($this->gateway->handleOrder($items));
    }
}
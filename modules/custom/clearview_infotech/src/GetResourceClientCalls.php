<?php

namespace Drupal\clearview_infotech;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Config\ConfigFactoryInterface;
use GuzzleHttp\ClientInterface;
use Symfony\Component\HttpFoundation\Response;

/**
 * Here we interact with the remote service.
 *
 * We use Guzzle (what else ;-) ).
 */
class GetResourceClientCalls {

  /**
   * The client used to send HTTP requests.
   *
   * @var \GuzzleHttp\ClientInterface
   */
  protected $client;

  /**
   * The header uses when sending HTTP request.
   *
   * The headers are very important when communicating with the REST server.
   * It's used by the server the verify that it supports the sent data
   * (Content-Type) and that it supports the type of response that the client
   * wants.
   *
   * @var array
   */

  protected $clientHeaders = [
    'Accept' => 'application/haljson',
    'Content-Type' => 'application/haljson',
  ];

  /**
   * The authentication parameters used when calling the remote REST server.
   *
   * @var array
   */

  protected $clientAuth;

  /**
   * The URL of the remote REST server.
   *
   * @var string
   */

  protected $remoteUrl;

  /**
   * The constructor.
   *
   * @param \GuzzleHttp\ClientInterface $client
   *   The HTTP client.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The Config Factory.
   */
  public function __construct(ClientInterface $client, ConfigFactoryInterface $config_factory) {
    $this->client = $client;

    // Retrieve the config from the configuration page set at
    // examples/rest_client_settings.
    // $rest_config = $config_factory->get('rest_example.settings');

    // $this->clientAuth = [
    //   $rest_config->get('server_password'),
    //   $rest_config->get('server_username'),
    // ];

    $this->remoteUrl = "https://app.sastoo.com/compute/volume?userName=ken&domain=site10&mode=dev";
  }

  /**
   * Retrieve a list of nodes from the remote server.
   *
   * When we retrieve entities we use GET.
   *
   * @param int $node_id
   *   The ID of the remote node, if needed. If the ID is NULL, all nodes will
   *   be fetched.
   *
   * @return mixed
   *   JSON formatted string with the nodes from the remote server.
   *
   * @throws \RuntimeException
   * @throws \GuzzleHttp\Exception\GuzzleException
   */
  public function index($node_id = NULL) {

    // If the configurated URL is an empty string, return nothing.
    if (empty($this->remoteUrl)) {
      return '';
    }

    $response = $this->client->request('GET',
      $this->remoteUrl, []
    );
    $result =  Json::decode($response->getBody()->getContents());
    //dump($result);exit;
  }
}

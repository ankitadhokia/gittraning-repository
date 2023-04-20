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
class PODcall {

  public function get($node_id = NULL) {

    return rand(1000,9999);

  }
}

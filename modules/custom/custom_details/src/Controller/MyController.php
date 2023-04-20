<?php
namespace Drupal\custom_details\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Connection;
use Symfony\Component\HttpFoundation\Response;

/**
 * Controller for the custom statistics route.
 */
class MyController extends ControllerBase {

  /**
   * Returns the statistics for the given node ID.
   *
   * @param int $node_id
   *   The node ID.
   *
   * @return \Symfony\Component\HttpFoundation\Response
   *   The rendered table of statistics.
   */
  public function displayStatistics($node_id) {
    $header = [
      ['data' => $this->t('User ID'), 'field' => 'user_id'],
      ['data' => $this->t('Node ID'), 'field' => 'node_id'],
      ['data' => $this->t('Time'), 'field' => 'time'],
    ];

    $database = \Drupal::database();
   // Select all records from the custom_details_custom_table table and order by node_id.
    $query = $database->select('custom_details_custom_table', 'cd');
   
    $query->fields('cd');
    $query->condition('cd.node_id', $node_id);
    $query->condition('cd.user_id', '1' , '=');
    //$query->condition('cd.node_id', $node_id , '=');
   

// Execute the query.
$results = $query->execute()->fetchAll();

    $rows = [];
    foreach ($results as $result) {
      $rows[] = [
        'data' => [
          'user_id' => $result->user_id,
          'node_id' => $result->node_id,
          'time' => $result->time,
        ],
      ];
    }

    $build = [
      '#type' => 'table',
      '#header' => $header,
      '#rows' => $rows,
      '#empty' => $this->t('No user details found.'),
    ];

    return new Response(render($build));
  }

}

<?php
namespace Drupal\clearview_infotech\Controller;
use Drupal\Core\Controller\ControllerBase;

class ClearviewController extends ControllerBase
{
    public function index()
    {
        
        echo 2;exit;
        return array(
            '#theme' => 'clearview_template',
            '#clearview_var' => $this->t('Dharmesh'),
        );

    }
    public function test()
    {
        $currentPath = \Drupal::service('get_resource_client_calls'); 
        $path = $currentPath->index();
        print_r($path);exit;

    }

}
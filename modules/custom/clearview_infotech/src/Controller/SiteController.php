<?php
namespace Drupal\clearview_infotech\Controller;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Url;
use Drupal\Core\Routing;
use Drupal\Core\Form\FormStateInterface;
/**
 * Class SiteController.
 *
 * @package Drupal\clearview_infotech\Controller
 */
class SiteController extends ControllerBase {
  public function listSites() {

	//Get parameter value while submitting filter form
	$fname = \Drupal::request()->query->get('fname');

	//====load filter controller
	//$form['form'] = $this->formBuilder()->getForm('Drupal\clearview_infotech\Form\SitefilterForm');

    // Create table header.
    $header = [
      'id' => $this->t('Id'),
      'fname' => $this->t('Site Name'),
	  'opt' =>$this->t('Operations')
    ];

    $form['student'] = [
      '#title' => $this->t('Add'),
      '#type' => 'link',
      '#url' => Url::fromRoute('clearview.sites_create_form'),
    ];

    $form['show'] = [
      '#title' => $this->t('List'),
      '#type' => 'link',
      '#url' => "",
    ];


   if($fname == ""){
    $form['table'] = [
      '#type' => 'table',
      '#header' => $header,
      '#rows' => get_students("All","",""),
      '#empty' => $this->t('No users found'),
    ];
   }else{
	    $form['table'] = [
      '#type' => 'table',
      '#header' => $header,
      '#rows' => get_students("",$fname),
      '#empty' => $this->t('No records found'),
    ];
   }
    $form['pager'] = [
      '#type' => 'pager'
    ];
    return $form;
  }
}

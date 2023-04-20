<?php
namespace Drupal\users\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Database\Database;
use Drupal\Core\Url;
use Drupal\Core\Routing;
use Drupal\paragraphs\Entity\Paragraph;

/**
 * Provides the form for adding Teachers.
 */
class UsersForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'users_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
     
   
    $form['field_uid'] = [
      '#type' => 'textfield',
      '#title' => $this->t('id'),
     
      '#maxlength' => 20,
        '#default_value' =>  (isset($record['name']) && $_GET['num']) ? $record['name']:'',
    ];
    $form['field_role'] = [
      '#type' => 'select',
      '#title' => $this->t('User Role'),
      '#options' => [
        'Admin',
        'Member',
        'Subscriber',
     ],
      //'#options' => $this->get_role_options(),
    ];
	 $form['field_status'] = [  
    '#type' => 'select',
     '#title' => $this->t('User status'),
     '#options' => [
      'Pending',
      'Approved',
      'Blocked',
   ],
    ];
	$form['field_user_emailid'] = [
      '#type' => 'textfield',
      '#title' => $this->t('EmailId'),
      '#maxlength' => 20,
	    
    ];
    
    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#button_type' => 'primary',
      '#default_value' => $this->t('Submit') ,
    ];
    $form['add'] = 
    [    '#type' => 'button',
    '#button_type' => 'primary',
    '#default_value' => $this->t('add field') ,
  ];
	
	//$form['#validate'][] = 'teacherFormValidate';

    return $form;

  }
  
   /**
   * {@inheritdoc}
   */
  public function validateForm(array & $form, FormStateInterface $form_state) {
       $field = $form_state->getValues();
	   
	/*	$fields["fname"] = $field['fname'];
		if (!$form_state->getValue('fname') || empty($form_state->getValue('fname'))) {
            $form_state->setErrorByName('fname', $this->t('Provide First Name'));
        }*/	
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array & $form, FormStateInterface $form_state) {

		$conn = Database::getConnection();
		
		$field = $form_state->getValues();
 
		$fields["field_uid"] = $field['field_uid'];
		$fields["field_role"] = $field['field_role'];
		$fields["field_status"] = $field['field_status'];
    $fields["field_user_emailid"] = $field['field_user_emailid'];


  }

  public function get_role_options(){
 /* $nodes = \Drupal::entityTypeManager()->getStorage('node')->loadByProperties(['type' => 'workspace', 'status' => 1]);
 // dump($nodes);exit;
    foreach ($nodes as $node_storage) {
      $field_users = $node_storage->get('field_users');
  
     foreach($field_users as $v->$target_id)
     dump($field_users);
    // $paragraph = Paragraph::load($target_id);
        $paragraph = \Drupal::entityTypeManager()->getStorage('paragraph');
        $query = \Drupal::entityQuery('paragraph')
        ->condition('type', "users");
          $results = $query->execute();
          $paragraph = Paragraph::create(['type' => 'users']);
          
         dump($results);
         dump($paragraph->get('field_status')->value());
         dump(\Drupal::entityTypeManager()->getStorage('paragraph'));continue;
         $para_data['field_role'] = $paragraph->get('field_role')->value;
  // dump($para_data);exit;
    }*/
   
$nodes = \Drupal::entityTypeManager()->getStorage('node')->loadByProperties(['type' => 'workspace', 'status' => 1]);
foreach($nodes as $node){
foreach ($node->get('field_users') as $paragraph) {
  
   if ($paragraph->entity->getType() == 'users') {  
    $my_paragraph = $paragraph->entity;
  //  dump($my_paragraph = $paragraph->entity->get('field_role')->getValue());exit;
   // dump($my_paragraph->get('field_role'));exit;
    $options->field_role->value;
  }
}
}
    return $options;
   
}

}

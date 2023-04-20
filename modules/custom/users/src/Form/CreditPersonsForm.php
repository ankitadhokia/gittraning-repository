<?php
namespace Drupal\users\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Database\Database;
use Drupal\Core\Url;
use Drupal\Core\Routing;
use Drupal\user\Entity\User;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\node\Entity\Node;


class CreditPersonsForm extends ConfigFormBase
{
  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames()
  {
    return array('general.credit_user_form');
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId()
  {
    return 'credit_users_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm($form, FormStateInterface $form_state)
  {
    $configs = $this->config('general.credit_users_form');
    $num_user = $form_state->get('num_user');

    if ($num_user === null)
    {
      $users = $form_state->set('num_user', 1);
      $num_user = 1;
    }
    
    $form['#tree'] = true;
    $form['site_credits'] = array(
      '#type' => 'fieldset',
      '#title' => $this->t('Site managers'),
      '#prefix' => '<div id="siteCreditsWrapper">',
      '#suffix' => '</div>',
    );

    

    for($i = 0; $i < $num_user; $i++) {
      $num = $i + 1;
      
      $form['site_credits']["users{$num}"] = array(
        '#type' => 'fieldset',
        '#title' => $this->t("User #{$num}"),
        '#prefix' => "<div id=\"user-{$num}\">",
        '#suffix' => '</div>',
      );

      
      $form['site_credits']["users{$num}"]['field_userid'] = array(
        '#type' => 'textfield',
        '#title' => $this->t('User Id'),
      );
  
      $form['site_credits']["users{$num}"]['field_role'] = array(
        '#type' => 'select',
        '#title' => $this->t('User Role'),
       '#options' => [
        'Administrator'=> 'Administrator',
        'Developer'=>'Developer',
        'Team Lead'=>'Team Lead',
        'Sr Developer'=>'Sr Developer'
       ],
       //'#options' => $this->get_role_options(),
      );
  
      /*$form['site_credits']["users{$num}"]['field_status'] = array(
        '#type' => 'select',
        '#title' => $this->t('User status'),
        '#options' => [
         'Pending' => 'Pending',
         'Approved' => 'Approved',
         'Blocked' => 'Blocked',
      ],
      );*/
  
      $form['site_credits']["users{$num}"]['field_email'] = array(
        '#type' => 'textfield',
        '#title' => $this->t('EmailId'),
        '#target_type' => 'paragraph',
      );

      $form['site_credits']["users{$num}"]['actions'] = array(
        '#type' => 'actions',
      );

      if ($num_user > 1)
      {
        $form['site_credits']["users{$num}"]['actions']['remove_user'] = array(
          '#type' => 'submit',
          '#value' => $this->t("Remove user"),
          '#submit' => ['::removeCallback'],
          '#ajax' => array(
            'callback' => '::addmoreCallback',
            'wrapper' => 'siteCreditsWrapper',
          ),
        );
      }
    }

    $form['site_credits']['actions'] = array(
      '#type' => 'actions',
    );

    $form['site_credits']['actions']['add_user'] = array(
      '#type' => 'submit',
      '#value' => $this->t('Add one more'),
      '#submit' => ['::addOne'],
      '#ajax' => array(
        'callback' => '::addmoreCallback',
        'wrapper' => 'siteCreditsWrapper',
      ),
      '#button_type' => 'default'
    );

    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => $this->t('Save'),
      '#button_type' => 'primary',
    );
  
    return $form;
  }

  /**
   * 
   */
  public function addmoreCallback(array &$form, FormStateInterface $form_state) {
 
    return $form['site_credits'];
  }

  /**
   * {@inheritdoc}
   */
  public function addOne(array &$form, FormStateInterface $form_state)
  {
    $users = $form_state->get('num_user');
    $add_user = $users + 1;
    $form_state->set('num_user', $add_user);
    
    $form_state->setRebuild();
  }


  /**
   * {@inheritdoc}
   */
  public function removeCallback(array &$form, FormStateInterface $form_state)
  {
    $users = $form_state->get('num_user');
    if ( $users > 1 )
    {
      $remove_user = $users - 1;
      $form_state->set('num_user', $remove_user);
    }
    
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array & $form, FormStateInterface $form_state) {
		
		$field = $form_state->getValues();

    $re_url = Url::fromRoute('users.CreditPersonsForm2');
		$fields["field_userid"] = $field['site_credits']['users1']['field_userid'];
		$fields["field_role"] = $field['site_credits']['users1']['field_role'];
	//	$fields["field_status"] = $field['site_credits']['users1']['field_status'];
    $fields["field_email"] = $field['site_credits']['users1']['field_email'];

    //\Drupal::messenger()->addMessage($this->t('user data=field_userid='.$fields["field_userid"].'=field_role='.$fields["field_role"].'=field_status='.$fields["field_status"].'field_email='.$fields["field_email"]));
      
    
    $form_state->setRedirectUrl($re_url);

  // Create a new Paragraph entity.
  $paragraph = \Drupal\paragraphs\Entity\Paragraph::create([
    'type' => 'workspace_user',
    'field_userid' => $fields["field_userid"],
    'field_role' => $fields["field_role"],
    'field_email' => $fields["field_email"],
  ]);
  
  $paragraph->isNew();
  
  $paragraph->save();
 
  $node = Node::create([
    'title' => 'My new workuser',
    'type' => 'workspace_content',
    'status' => 1,
    'field_user' => array(
        array(
              'target_id' => $paragraph->id(),
              'target_revision_id' => $paragraph->getRevisionId()
        ),
      ),
    ]);
   
    $node->save();

  }


}

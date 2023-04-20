<?php

namespace Drupal\clearview_infotech\Form;

use Drupal\Core\Database\Database;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;


/**
 * Form for the contact settings form.
 *
 * The settings created by this form can not be exported and only lives in
 * the database of the current environment.
 */
class SiteCreateForm extends FormBase
{

    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'site_create_form';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state,$arg = NULL)
    {
        $conn = Database::getConnection();
        $record = [];
        $get_path = explode("/", \Drupal::service('path.current')->getPath());

        if (isset($get_path[6])) {
            $query = $conn->select('students', 'st');
            $query->condition('id', $get_path[6])->fields('st');
            $record = $query->execute()->fetchAssoc();
        }
        $name = $record['name'];

        $language = \Drupal::languageManager()->getLanguages();

        $form['name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Name Your Site'),
            '#required' => true,
            '#maxlength' => 20,
            '#default_value' => (isset($record['name']) && $get_path[6]) ? $record['name'] : '',
        ];

        $form['domain_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Your Development Site URL'),
            '#attributes' => array('readonly' => 'readonly'),
            '#default_value' => 'sastoo.com',
        ];
        $form['my_site'] = array(
            '#type' => 'hidden',
            '#value' => $arg, 
            '#prefix' => '<div id="go_button"><h4 class="block-header">'.$arg.'</h4><p>Maintaining '.$arg.' sites can be a pain - our 1-click core updates and multiple development environments make it safe and easy.</p>',
            '#suffix' => '</div>',
        );

        $form['actions']['#type'] = 'actions';
        $form['actions']['submit'] = [
            '#type' => 'submit',
            '#button_type' => 'primary',
            '#default_value' => (isset($get_path[6])) ? $this->t('Update') : $this->t('Save'),
        ];

        return $form;

    }

    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state)
    {
        //print_r($form_state->getValues());exit;

    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        //echo "reaches";exit;
        $conn = Database::getConnection();
        $account = $this->currentUser();
        $get_path_update = explode("/", \Drupal::service('path.current')->getPath());
        $uid = $account->id();
        $names = [];
        $language = \Drupal::languageManager()->getLanguages();

        $field = $form_state->getValues();


        $re_url = Url::fromRoute('entity.node.canonical', ['node' => 1]);

        
        $fields["name"] = $field['name'];
        $data["userName"] = 'ken';
        $data['domainName'] = $field['name'];
        $curl = curl_init();
        $postdata = json_encode($data);
        // /print_r($postdata); die;
        curl_setopt_array($curl, array(
          CURLOPT_URL => 'https://app.sastoo.com/compute/pod',
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'POST',
          CURLOPT_POSTFIELDS =>$postdata,
          CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
          ),
        ));
        
        $response = curl_exec($curl);
        curl_close($curl);
//echo $response; die;
            \Drupal\node\Entity\Node::create([
            'type' => 'create_site',
            'title' => $field['name'],
            'uid' => $uid,
            ])->save();

            //$conn->insert('user_site')
             //  ->fields($fields)->execute();
            \Drupal::messenger()->addMessage($this->t('Site has been succesfully saved'), 'status');
            $form_state->setRedirectUrl($re_url);

    }
}

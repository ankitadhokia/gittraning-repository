<?php

namespace Drupal\clearview_infotech\Form;

use Drupal\Core\Database\Database;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\node\Entity\Node;



/**
 * Form for the contact settings form.
 *
 * The settings created by this form can not be exported and only lives in
 * the database of the current environment.
 */
class WorkspaceForm extends FormBase
{

    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'workspace_create_form';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state,$arg = NULL)
    {
        $conn = Database::getConnection();
        $record = [];
        $get_path = explode("/", \Drupal::service('path.current')->getPath());

        $language = \Drupal::languageManager()->getLanguages();
        $form['wname'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Name Your Workspace'),
            '#required' => true,
            '#maxlength' => 20,
            '#default_value' => (isset($record['name']) && $get_path[6]) ? $record['name'] : '',
        ];
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
        /**
            * add Workspace
        */
        $field = $form_state->getValues();
        if(isset($field['wname']) && $field['wname']){
            $node = Node::create(['type' => 'workspace']);
            $uuId = \Drupal::currentUser()->id();
            $node->title= $field['wname'];
            $gitId = shell_exec("/var/www/sh creategit.sh $uuId");
            $uuid_service = \Drupal::service('uuid');
            $uuid = $uuid_service->generate();
            $uuid = substr($uuid, 0, 28);
            $node->field_uuid = $uuid;
            $node->save();
        }
    }
}

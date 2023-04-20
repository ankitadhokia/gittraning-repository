<?php

namespace Drupal\clearview_infotech\Form;

use Drupal\Core\Database\Database;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\paragraphs\Entity\Paragraph;

/**
 * Form for Adding new ssh key.
 */
class AddSSHForm extends FormBase
{

    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'ssh_key';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state,$arg = NULL)
    {
        $form['keyname'] = [
            '#type' => 'textfield',
            '#title' => $this->t('SSH key Name'),
            '#required' => true,
            '#maxlength' => 20,
        ];
        $form['sshkey'] = [
            '#type' => 'textarea',
            '#required' => true,
            '#title' => $this->t('SSH Key'),
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
        $key = $form_state->getValues()['sshkey'];
        $query = \Drupal::database()->select('paragraph__field_key', 't');
        $query->fields('t', ['field_key_value']);
        $query->condition('field_key_value', $key, "=");
        $query->distinct();
        $result = $query->execute()->fetchAll();
        if(!empty($result)){
          $form_state->setErrorByName('sshkey', t('SSH key already exists, Please add new key'));
        }

    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        //shell execute command need to add
        $ssh_key_data = shell_exec("sh /var/www/html/copysshroot.sh $uuid $ssh_key");


    }
}
